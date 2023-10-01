export default function bubble_sort(arr: number[]): void {
    let i;
    let j;
    let len = arr.length;
    let temp;
    for(i = 0; i < len; i++) {
        for(j = i; j < len; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}