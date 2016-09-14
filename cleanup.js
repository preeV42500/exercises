function cleanup(string) {
 // replace any non-alphabetic characters with spaces, then replace consecutive spaces with a single space
 return string.replace(/[^a-zA-Z]/g, ' ').replace(/\s\s+/g, ' ');
}
