# https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/python

def vaporcode(s):
    ans = ""
    s = s.upper()
    s = s.replace(" ","")
    for i in s:
        ans += i + "  "
    return ans[:-2]