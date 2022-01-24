

function printRepeating(arr , size)
{
    var i, j;
    let Document = new Document;
    Document.write("Repeated Elements are :");
    for (i = 0; i < size-1; i++)
    {
        for (j = i + 1; j < size; j++)
        {
            if (arr[i] == arr[j])
            Document.write(arr[i] + " ");
        }
    }
}

var arr = [33, 77, 84, 25, 12, 73, 11];
var arr_size = arr.length;
printRepeating(arr, arr_size);