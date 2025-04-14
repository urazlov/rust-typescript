fn main() {
    let file_name = std::env::args().nth(1).expect("provide the file name");

    let file = std::fs::read_to_string(file_name).expect("please put the file :)");

    file.lines().for_each(|line| {
        if let Ok(value) = line.parse::<usize>() {
            println!("{}", value);
        } else {
            println!("Line not a number");
        }
    });
}
