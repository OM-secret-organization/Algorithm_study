
# 짝수 홀수 개수

# 정수가 담긴 리스트 num_list가 주어질 때,
#  num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.



def solution(num_list):
    even_number = []
    odd_number = []

    answer = []

    for i in num_list:
        if i % 2 == 0:
            even_number.append(i)
        else:
            odd_number.append(i)

    len_even = len(even_number)
    len_odd = len(odd_number)

    answer.append(len_even)
    answer.append(len_odd)

    return answer

