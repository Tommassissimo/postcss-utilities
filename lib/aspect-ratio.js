/**
 * Aspect Ratio
 */
module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    var width = args[1];
    var height = args[2];

    parentDecl.append({
        prop: 'position',
        value: 'relative',
        source: decl.source
    }, {
        prop: 'display',
        value: 'block',
        source: decl.source
    }, {
        prop: 'height',
        value: 0,
        source: decl.source
    }, {
        prop: 'padding',
        value: 0,
        source: decl.source
    }, {
        prop: 'overflow',
        value: 'hidden',
        source: decl.source
    }, {
        prop: 'padding-bottom',
        value: height / width * 100 + '%',
        source: decl.source
    });

    decl.remove();
};