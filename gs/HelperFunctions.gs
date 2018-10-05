/*************************************************************
Function: RemoveDuplicates
  Creates a new version of an array with no duplicates

Inputs:
           arr:  array of audio event names
Output:
  unique_array:  Array with same info but no duplicates
*************************************************************/
function RemoveDuplicates(arr)
{
    var unique_array = [];
    for(var i = 0; i < arr.length; ++i)
    {
        if(unique_array.indexOf(arr[i]) == -1)
        {
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
}
