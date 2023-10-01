export default function bubble_sort(arr: number[]): void {
    let i;
    let j;
    let len = arr.length;
    let temp;
    for(i = 0; i < len; i++) {
        for(j = 0; j < len-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}