var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/alt.right/g, 'white supremacist');
            replacedText = replacedText.replace(/Alt.right/g, 'White supremacist');
            replacedText = replacedText.replace(/Alt.Right/g, 'White Supremacist');
            replacedText = replacedText.replace(/ALT.RIGHT/g, 'WHITE SUPREMACIST');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
