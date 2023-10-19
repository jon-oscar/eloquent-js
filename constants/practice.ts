export const practice = [
    {
      id: 'chapter-2',
      exercises: [
        {
          title: 'Looping a triangle',
          description:
            'Write a loop that makes seven calls to console.log to output a triangle',
          code: `for(let i = 1; i <= 7 ; i++){
              '#'.repeat(i)
            }`,
        },
        {
          title: 'FizzBuzz',
          description:
            'Write a program to print all the numbers from 1 to 100. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.',
          code: `for(let i = 1; i < 101; i++){
              if(i % 3 == 0){
                console.log('Fizz')
              
              } else if (i % 5 == 0) {
                console.log('Buzz')
              } 
              else {
                console.log(i)
              }
            }`,
        },
        {
          title: 'Chessboard',
          description:
            'Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character.',
          code: `const chessBoard = (param) => {
              let size = param
              let board = ''
              
              for(let y = 0; y < size; y++){
                for(let x = 0; x < size; x++){
                  board += (x + y) % 2 == 0 ? ' ' : '#'
                }
                board += "\n"
              }
              
              return board
            }
            
            console.log (chessBoard(8))`,
        },
      ],
    },
  ]
  