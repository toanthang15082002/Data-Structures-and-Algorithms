"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
"""
# Brute-force: O(n^2)
def two_sum_bruteforce(nums, target):
  n = len(nums)
  for i in range(n):
    for j in range(i + 1, n):
      if nums[i] + nums[j] == target:
        return [i, j]
  return None

# Hash map (hiệu năng tốt): O(n) time, O(n) space
def two_sum_hash(nums, target):
  """
  Dùng dict để lưu value -> index. Trả về [index_of_complement, i] khi tìm thấy.
  """
  seen = {}  # value -> index
  for i, val in enumerate(nums):
    complement = target - val
    if complement in seen:
      return [seen[complement], i]
    # lưu sau khi kiểm tra để không dùng cùng phần tử hai lần
    seen[val] = i
  return None

# Ví dụ chạy
if __name__ == "__main__":
  print(two_sum_bruteforce([2, 7, 11, 15], 9))   # in [0, 1] và in kết quả trả về
  print(two_sum_hash([3, 2, 4], 6))             # [1, 2]
  print(two_sum_hash([3, 3], 6))                # [0, 1]
  print(two_sum_hash([1, 5, 5, 11], 10))        # [1, 2]
