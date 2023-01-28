import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { itemDataLearning } from './itemData';
import TelegramComments from 'react-telegram-comments';
import ChannelPreviewLearning from '../components/ChannelPreviewLearning';
import ReactMarkdown from 'react-markdown';
import Latex from 'react-latex-next';
import Zoom from 'react-medium-image-zoom'
import 'katex/dist/katex.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const postNumber = itemDataLearning.find(x => x.key === 'linear_algebra_for_ml').id;

const title = itemDataLearning.find(x => x.id === postNumber).title + ' - segfaultnomad.github.io';
const key = itemDataLearning.find(x => x.id === postNumber).key;
var banner = require("./img/learning/" + key + ".jpg");

const prevImgStyle = {
	"width": "55%",
	"clip-path": "inset(25% 0px 30% 0px round 15px)",
	"transform": "scale(1.8)",
	"filter": "brightness(70%)"
}

const prevStyle = {
	"position": "relative",
}

const prevTextStyle = {
	"position": "absolute",
	"top": "50%",
	"left": "50%", "width": "100%",
	"transform": "translate(-50%, -70%)",
	"margin": "0",
	"padding": "0",
	"color": "#f2f2f2",
	"font-size": "55px",
	"font-family": "'Quicksand', sand-serif"
}

export default function Post() {  	
	return (
		<motion.div 
			initial={{opacity: 0 }}
			animate={{opacity: 1 }}
			exit={{opacity: 0 }}
			transition={{ duration: 0.15 }}>
			<Helmet><title>{ title }</title></Helmet>
			<center><div class='noselect' style={prevStyle}>
				<img style={prevImgStyle} src={banner} alt="banner" />
				<b><div style={prevTextStyle}>{itemDataLearning.find(x => x.id === postNumber).title}</div></b>
				<br/>
			</div></center><div class="postBody">
				
					
<ReactMarkdown># This is Markdown </ReactMarkdown>
<Latex>This is LaTeX: $e^+e^-$ $\\gamma$</Latex>
<Latex>\[ \lambda_(X^T X) / \lambda(X^T X) = 8.920608e+04\]</Latex>
Modal images:
<center><AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"><Zoom><img alt="img" src="https://lh4.googleusercontent.com/gXe2uhATd6_vzw8xXKcliBolY0f4PkRJYTsvLJjMSBlTFKKDr5HcB-QhP5PX2qCM8is=w2400" width="50%" /></Zoom></AnimationOnScroll></center>
<center><AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"><Zoom><img alt="img" src="https://lh6.googleusercontent.com/b53GvmRR2JAICTDv0kY6P4njD9cEwWHx-XjLt6nXrQeq7S00_SvV3s8pNqampKECiiA=w2400" width="50%" /></Zoom></AnimationOnScroll></center>

<ReactMarkdown>	
											
[https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k](https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k)

[https://www.youtube.com/playlist?list=PLA0M1Bcd0w8xcPNkaqqRzmh4FEWTB671A](https://www.youtube.com/playlist?list=PLA0M1Bcd0w8xcPNkaqqRzmh4FEWTB671A)

Mathematics for ML: главы 2 и 3

[https://mml-book.github.io/book/mml-book.pdf](https://mml-book.github.io/book/mml-book.pdf)

[https://www.youtube.com/watch?v=5fN2J8wYnfw](https://www.youtube.com/watch?v=5fN2J8wYnfw)

[https://www.youtube.com/watch?v=OtQZQpR-ZWQ](https://www.youtube.com/watch?v=OtQZQpR-ZWQ)

[https://www.youtube.com/watch?v=2ogdwpHD3V8](https://www.youtube.com/watch?v=2ogdwpHD3V8)

[https://www.youtube.com/watch?v=DkyM93Wgh_0](https://www.youtube.com/watch?v=DkyM93Wgh_0)

[https://ml-handbook.ru/chapters/matrix_diff/intro](https://ml-handbook.ru/chapters/matrix_diff/intro)

Как должны быть связаны между собой две матрицы, чтобы их можно было диагонализировать одним оператором поворота?		
		
</ReactMarkdown>					


			</div><div class='chatWrapper'><TelegramComments websiteKey={'2JA7Wo3q'} customColor='000000' commentsNumber={5} pageId={key} showDislikes={true} /></div>
			<ChannelPreviewLearning />
		</motion.div>
	);
};
  
