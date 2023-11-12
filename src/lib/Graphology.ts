
export function forGraphology(data: {nodes: {id: string, value: number}[], links: {source: {id: string}, target: {id: string}}[]}) {
    const nodes = data.nodes.map(node => ({key: node.id, attributes: {value: node.value}}));
    const edges = data.links.map(link => ({source: link.source.id, target: link.target.id}));
    return {nodes, edges};
}

export function forD3(data: {nodes: {key: string, attributes: {value: number}}[], edges: {source: string, target: string}[]}) {
    const nodes = data.nodes.map(node => ({id: node.key, value: node.attributes.value}));
    const links = data.edges.map(edge => ({source: edge.source, target: edge.target}));
    return {nodes, links};
}

