import os
from PIL import Image

def compress_image(image, max_size_kb, quality):
    # Save the image with the specified quality
    temp_path = "temp_image.webp"
    image.save(temp_path, 'WEBP', quality=quality)
    
    # Check the size of the compressed image
    while os.path.getsize(temp_path) > max_size_kb * 1024 and quality > 10:
        quality -= 5
        image.save(temp_path, 'WEBP', quality=quality)
    
    return temp_path

def convert_to_webp(source_dir, max_size_kb):
    for filename in os.listdir(source_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            file_path = os.path.join(source_dir, filename)
            img = Image.open(file_path)

            # Create the new filename by changing the extension to .webp
            webp_filename = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(source_dir, webp_filename)

            # Compress and save the image as WebP
            temp_path = compress_image(img, max_size_kb, quality=85)
            os.rename(temp_path, webp_path)
            print(f'Converted {filename} to {webp_filename} with compression')

if __name__ == "__main__":
    source_directory = input("Enter the directory path containing the images: ")
    max_size_kb = 500  # Max size in KB
    if os.path.isdir(source_directory):
        convert_to_webp(source_directory, max_size_kb)
    else:
        print("The provided path is not a directory.")
