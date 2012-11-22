function Trie(){ this.nodes = {}; this.isLeaf = false; }
Trie.prototype.insert = function(string){
    if (!string) {
        this.isLeaf = true;
        return;
    }
    var node = this.nodes[string[0]];
    if (!node) this.nodes[string[0]] = node = new Trie;
    node.insert(string.substring(1));
}
Trie.prototype.find = function(string){
    if (!string) return this;
    return string[0] in this.nodes && this.nodes[string[0]].find(string.substring(1));
}
Trie.prototype.contains = function(string) {
    var node = this.find(string);
    return node && node.isLeaf;
}
Trie.prototype.permutations = function(string) {
    var results = [], node;
    if (string) {
        node = this.find(string);
    } else {
        node = this;
    }
    if (node) {
        node.permute(results, string || '');
    }
    return results;
}
Trie.prototype.permute = function(results, prefix) {
    if (this.isLeaf) results.push(prefix);
    for (var key in this.nodes) {
        this.nodes[key].permute(results, prefix + key);
    }
}
