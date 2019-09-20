import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipies=[
    {
      dishName : 'sambar-rice',
      img : 'https://image.shutterstock.com/image-photo/sambar-rice-south-indian-food-260nw-1166486380.jpg',
      description : 'Preparation to make sambar rice Wash rice and dal together in a bowl or directly in the cooker When the pressure releases naturally remove the rice & dal & slightly mash them.Heat ghee in a pan.   Next add veggies and saute for 2 to 3 minutes. Pour 1 cup water and cook the vegetables until soft'
    },
    {
      dishName : 'dal',
      img : 'https://image.shutterstock.com/image-photo/tarka-dhal-curry-260nw-758513470.jpg',
      description : 'Dal is a term used in the Indian subcontinent for dried, split pulses. The term is also used for various soups prepared from these pulses. These pulses are among the most important staple foods in South Asian countries, and form an important part of the cuisines of the Indian subcontinent.'
    },
    {
      dishName : 'Biriyani',
      img : 'https://media-public.canva.com/MAC4SwBigJQ/1/thumbnail_large.jpg',
      description : 'Biryani, also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately.'
    },
    {
      dishName : 'chicken chilli',
      img : 'https://image.shutterstock.com/image-photo/chilli-chicken-260nw-637422178.jpg',
      description : '- Chilli Chicken is a popular Indo-Chinese recipe that you can easily prepare in your home. It’s a mouth-watering chicken recipe that’s cooked using Indian vegetables and Chinese flavours. It’s mouth-watering appetizer recipe that has boneless chicken marinated in eggs, corn flour'
    },
    {
      dishName : 'panneer butter masala',
      img : 'https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542__480.jpg',
      description : 'Paneer tikka masala is an Indian dish of marinated paneer cheese served in a spiced gravy. It is a vegetarian alternative to chicken tikka masala.'
    },
    {
      dishName : 'thandhoori chicken',
      img : 'https://cdn.pixabay.com/photo/2019/07/17/06/22/tandoori-4343144__480.jpg',
      description : 'Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yoghurt and spices in a tandoor, a cylindrical clay oven. The dish originated from the Indian subcontinent and is popular in many other parts of the world. '
    },
    {
      dishName : 'lemon rice',
      img : 'https://image.shutterstock.com/image-photo/lemon-ricechitranna-indian-rice-traditional-260nw-317794625.jpg',
      description : 'Chitranna is a rice-based dish widely prepared in South India. It is prepared by mixing cooked rice with a special seasoning called Oggarane or Gojju'
    },
    {
      dishName : 'upma',
      img : 'https://image.shutterstock.com/image-photo/homemade-south-indian-breakfast-dish-260nw-791939890.jpg',
      description : 'Upma, uppumavu or uppittu is a dish originating from the Indian subcontinent, most common in South Indian, Maharashtrian, and Sri Lankan Tamil breakfast, cooked as a thick porridge from dry-roasted semolina or coarse rice flour. '
    },
    {
      dishName : 'puri',
      img : 'https://image.shutterstock.com/image-photo/sujisooji-halwa-puri-shira-poori-260nw-1192664524.jpg',
      description : 'Puri (also spelled Poori) is an unleavened deep-fried bread, originating from the Indian ... In the South of India, puri is almost always made for tiffin, and on the east coast (Andhra, Tamil Nadu) its rarely eaten with non-vegetarian dishes.'
    },
    {
      dishName : 'dosa',
      img : 'https://image.shutterstock.com/image-photo/paper-masala-dosa-south-indian-260nw-1008144772.jpg ',
      description : 'A dosa is a cooked flat thin layered rice batter, originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram ground together in a fine, smooth batter with a dash of salt. '
    }
  ]
  constructor() { }
resipyData:any="";

sendResipy(resipy){
  this.resipyData = resipy;
};
  ngOnInit() {
  }

}
