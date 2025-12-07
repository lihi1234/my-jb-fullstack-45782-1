import mult
import div
from icecream import ic

if __name__=='__main__':
    ic(print(mult.mult(3,4)))
    ic(print(div.div(4,5)))

    f=open("hello.txt")
    ic(print(f.read()))