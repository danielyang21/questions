import os

def find_solution_files_with_warning(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, directory)
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read().strip()
                    if "warning" in content.lower():
                        print(f"'Warning' found in file: {relative_path}")

if __name__ == "__main__":
    # Define the specific directory path here
    directory = r"C:\Users\johnl\OneDrive\Documents\GitHub\questions\src\content\questions\comp2804"
    find_solution_files_with_warning(directory)
