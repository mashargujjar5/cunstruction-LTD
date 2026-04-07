import os
import glob

video_dir = r"d:\codesinc projects\cunstruction\cunstruction-LTD\src\assets\video"
mp4_files = glob.glob(os.path.join(video_dir, "*.mp4"))

for f in mp4_files:
    if "hero-1.mp4" not in f:
        new_path = os.path.join(video_dir, "hero-1.mp4")
        try:
            os.rename(f, new_path)
            print(f"Renamed {f} to {new_path}")
        except Exception as e:
            print(f"Error renaming {f}: {e}")
