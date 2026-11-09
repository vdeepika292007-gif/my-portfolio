@echo off
cd /d "%~dp0"
echo ========================================================
echo Deepika V - Interactive Portfolio
echo Opening local preview at http://127.0.0.1:8027/
echo Keep this window open while previewing. Press Ctrl+C to stop.
echo ========================================================
start "" "http://127.0.0.1:8027/"
python -m http.server 8027 --bind 127.0.0.1
pause

