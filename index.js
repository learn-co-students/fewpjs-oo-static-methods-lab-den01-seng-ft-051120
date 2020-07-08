class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() +
    string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, "");
  }

  static titleize(sentence) {
    
    var _titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + 
            string.slice(1).toLowerCase();
        },
        result = [];
    sentence.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
}
}