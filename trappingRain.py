class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0
        for i in range(1, len(height)-1):
            maxLeft = max(height[:i])
            maxRight = max(height[i+1:])
            potential = min(maxLeft, maxRight) - height[i]
            ans += (max(0, potential))
        return ans
