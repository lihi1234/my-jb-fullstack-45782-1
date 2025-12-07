if __name__== "__main__":
    name = input("Enter your name: ")

    with open("name.txt", "a") as f:
        f.write(name)
