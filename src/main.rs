fn practice(nums: Vec<usize>, index: usize) -> usize {
    return nums.get(index).unwrap_or(&index) * 5;
}

fn main() {
    let a = vec![1, 2, 3];
    let b = vec![1, 2, 3];
    println!("{}", practice(a, 0));
    println!("{}", practice(b, 10));
}
