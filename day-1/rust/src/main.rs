use std::fs::File;
use std::io::prelude::*;
fn main() {
    let mut args = std::env::args();
    let mut file = File::open(args.nth(1).unwrap()).unwrap();
    let mut content = String::new();
    file.read_to_string(&mut content).unwrap();
    println!("{}",day1(content));
}
fn day1(content:String)->usize{
    let mut sum:usize = 0;
    for line in content.lines() {
        let matches:Vec<&str> = line.matches(char::is_numeric).collect();
        let first = matches.first();
        let last = matches.last();
        println!("{:?}",matches);
        match first{
            Some(f)=>{
                let l = last.unwrap();
                let mut result = String::new();
                result.push_str(f);
                result.push_str(l);
                sum += result.parse::<usize>().unwrap();
            },
            None=>{
                continue;
            }
        }
    }
    sum
}
