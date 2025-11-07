#!/usr/bin/env python3
import subprocess
import sys
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

if __name__ == "__main__":
    subprocess.run([sys.executable, "backend/app.py"])
