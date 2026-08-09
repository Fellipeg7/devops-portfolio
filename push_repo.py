#!/usr/bin/env python3
"""Cria o repo devops-portfolio e envia todos os arquivos via Contents API."""
import base64
import json
import os
import re
import sys
import urllib.error
import urllib.request

ENV_PATH = r"C:\Users\Fellipe\AppData\Local\hermes\.env"
LOCAL_DIR = r"C:\Users\Fellipe\devops-portfolio"
OWNER = "Fellipeg7"
REPO = "devops-portfolio"
API = "https://api.github.com"

DESCRIPTION = (
    "\U0001F310 Site portfolio interativo com animações, projetos em destaque "
    "e blog integrado. React + Vite + Tailwind CSS."
)


def load_token():
    with open(ENV_PATH, encoding="utf-8") as fh:
        for line in fh:
            m = re.match(r"^\s*GITHUB_TOKEN\s*=\s*(\S+)\s*$", line)
            if m:
                return m.group(1).strip()
    raise RuntimeError("GITHUB_TOKEN not found in .env")


def api(method, path, payload=None, token=None):
    req = urllib.request.Request(API + path, method=method)
    req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("User-Agent", "hermes-agent")
    data = None
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, data=data, timeout=60) as resp:
            body = resp.read().decode("utf-8")
            return resp.status, json.loads(body) if body else {}
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        print(f"  !! HTTP {e.code} on {method} {path}: {body[:400]}")
        sys.exit(1)


def collect_files(root):
    files = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in (".git", "node_modules", "dist")]
        for name in filenames:
            full = os.path.join(dirpath, name)
            rel = os.path.relpath(full, root).replace(os.sep, "/")
            files.append((rel, full))
    return sorted(files)


def main():
    token = load_token()
    print(f"token carregado: {token[:7]}...{token[-4:]}")

    # 1) Cria o repositório
    print("-> criando repositório...")
    status, repo = api(
        "POST",
        "/user/repos",
        {"name": REPO, "description": DESCRIPTION, "private": False, "auto_init": False},
        token,
    )
    print(f"   repo criado: {repo.get('html_url')} (HTTP {status})")

    # 2) Envia cada arquivo via Contents API
    files = collect_files(LOCAL_DIR)
    print(f"-> enviando {len(files)} arquivos...")
    for rel, full in files:
        with open(full, "rb") as fh:
            content_b64 = base64.b64encode(fh.read()).decode("ascii")
        payload = {
            "message": f"chore: adiciona {rel}",
            "content": content_b64,
        }
        status, _ = api("PUT", f"/repos/{OWNER}/{REPO}/contents/{rel}", payload, token)
        print(f"   [{status}] {rel}")

    # 3) Tópicos do repositório
    topics = ["devops", "portfolio", "react", "vite", "tailwindcss",
              "infrastructure-as-code", "ci-cd", "cloud-native", "framer-motion"]
    req = urllib.request.Request(f"{API}/repos/{OWNER}/{REPO}/topics", method="PUT")
    req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("User-Agent", "hermes-agent")
    req.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(req, data=json.dumps({"names": topics}).encode(), timeout=60) as resp:
        print(f"   topics OK (HTTP {resp.status})")

    print("\nPRONTO:", repo.get("html_url"))


if __name__ == "__main__":
    main()
