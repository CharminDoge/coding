def isLychrel(n):
    for iter in range(50):
        n += int(str(n)[::-1])
        if str(n) == str(n)[::-1]:
            return False
    return True


def main():
    count = 0
    for i in range(10_000):
        if isLychrel(i) == True:
            count += 1
    return count


if __name__ == '__main__':
    print(main())
