import Post from './post'
import './style.css'
import image from './assets/icon-square-big.png'
console.log(image)

const post = new Post('Webpack Post Title')

console.log('Post to string:', post.toString())