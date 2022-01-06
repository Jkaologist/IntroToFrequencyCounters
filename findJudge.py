class Solution:
    def findJudge(N, trust):
        if len(trust) < N-1:
            return -1
        inDegree = [0] * (N+1)
        outDegree = [0] * (N+1)
        for a, b in trust:
            outDegree[a] += 1
            inDegree[b] += 1
        for i in range(1, N+1):
            print(inDegree[i], outDegree[i])
            if inDegree[i] == N-1 and outDegree[i] == 0:
                return i
        return -1


print(Solution.findJudge(2, [[1, 2]]))  # 2
print(Solution.findJudge(3, [[1, 3], [2, 3]]))  # 3
print(Solution.findJudge(3, [[1, 3], [2, 3], [3, 1]]))  # -1
