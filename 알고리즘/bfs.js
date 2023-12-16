function bfs(graph, startNode) {
    const result = [];

    const visited = new Set();
    let needVisit = [startNode];

    while (needVisit.length > 0) {
        const currentNode = needVisit.shift();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        needVisit = [...needVisit, ...graph[currentNode]];

        result.push(currentNode);
    }

    return result;
}

const graph1 = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'G', 'H', 'I'],
    D: ['B', 'E', 'F'],
    E: ['D'],
    F: ['D'],
    G: ['C'],
    H: ['C'],
    I: ['C', 'J'],
    J: ['I'],
};
console.log(bfs(graph1, 'A'));
/*
[
  'A', 'B', 'C', 'D',
  'G', 'H', 'I', 'E',
  'F', 'J'
]
*/

const graph2 = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
console.log(bfs(graph2, 0));
/*
[ 0, 1, 2, 4, 5, 3 ]
*/

const graph3 = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
];
console.log(bfs(graph3, 1));
/*
[
  1, 2, 3, 8,
  7, 4, 5, 6
]
*/

/*
참고
https://velog.io/@sean2337/Algorithm-DFS%EC%99%80-BFS%EC%9D%98-%EC%89%AC%EC%9A%B4-%EA%B0%9C%EB%85%90-JavaScript-%EA%B5%AC%ED%98%84-%EB%B0%A9%EB%B2%95
*/
