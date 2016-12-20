"use strict";

/// Перемещение объектов
/// с условиями по ширине
/// @obj - объект, который необходимо перенести
/// @from - откуда производится перенос
/// @to - куда производится перенос
/// @width - при какой ширине производить перенос { < width }
function detachPrependTo(obj, from, to, width, insertAfter) {
    if (width === undefined) {
        width = 768;
    }
    if (insertAfter === undefined) {
        insertAfter = false;
    }

    if (getPageSize()[2] < width) {
        /* перемещаем контейнер */
        if (insertAfter) {
            $(from).find(obj).detach().insertAfter(to);
        }
        else {
            $(from).find(obj).detach().prependTo(to);
        }
    }
    else {
        /* перемещаем контейнер */
        if (insertAfter) {
            $(to).siblings(obj).detach().prependTo(from);
        }
        else {
            $(to).find(obj).detach().prependTo(from);
        }
    }
}
