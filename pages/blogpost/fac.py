# a = 1600
# b = 13
# ans = []
# def is_prime(n):
#     flag = True
#     if n > 1:
#          for i in range(2, n):
#             if (n % i) == 0:
#                 flag = False
#                 break
#     return flag
# def fac(n):
#     res = 1
#     for i in range(n):
#         res*=i
#     return res
# for i in range(3,a+1):
#     if is_prime(fac(i)+b):
#         print(i)
#         # ans.append(i)

# print(ans)
# # print(is_prime(6))
n = int(input("Enter: "))
i = 5
res = 0
while(i<=n):
    res += n//i
    i*=5
print(res)