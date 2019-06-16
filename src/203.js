// Step Back From the Tail


function fromLast(list, x) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while(x > 0) {
        fast = fast.next;
        x--;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}