const Post = (function() {
    function Post(post, initial, config) {
        this.post = post;
        // получения данных для поста
        const info = config[initial];
        // создание div для фото поста
        const photo = document.createElement('div');
        // добавление класса photo
        photo.classList.add('photo');
        // созданре блока фона
        const style = document.createElement('style');
        // вставка фото-фона поста
        let j = '#post' + (initial + 1) ;
        style.innerHTML =  j +' .photo { background-image: url(' + info.photo  + ');}';
        photo.appendChild(style);
        // создание элемента для фото автора
        const user_pic = document.createElement('img');
        // добавление класса фото автора 
        user_pic.classList.add('user_pic');
        // передача картинки в элемент
        user_pic.src = info.user_pic;
        // передача размеров картинки
        user_pic.width = 40;
        user_pic.height = 40;
        // добавляем фото автора внутрь блока поста 
        photo.appendChild(user_pic);
        // создание элемента для имени автора поста
        const user_name = document.createElement('h1');
        // добавление класса авторапоста 
        user_name.classList.add('user_name');
        // Вставка имени автора поста и даты
        user_name.innerHTML = info.user_name + '<br><a>' + info.post_date + '</a>';
        // добавление элемента в тело поста
        photo.appendChild(user_name);
        // создание элемента заголовка поста
        const title = document.createElement('h1');
        // добавление класса заголовка поста 
        title.classList.add('title');
        // вставка содержимого элемента поста
        title.textContent = info.title;
        // добавление заголовка внутрь юлока поста
        photo.appendChild(title);
        // создание div для содержания поста
        const about = document.createElement('div');
        // добавление класса содержимого поста
        about.classList.add('about');
        // создание элемента для текста поста
        const article = document.createElement('h1');
        // добавление класса текста поста
        article.classList.add('article');
        // передача содержимого поста
        article.textContent = info.article;
        // добавление текста в тело поста
        about.appendChild(article);
        // создание элемента для ссылки 
        const link = document.createElement('h1');
        // добавление классса ссылки 
        link.classList.add('link');
        // добавление названия ссылки
        link.textContent = info.link;
        // добавление ссылки в тело поста
        about.appendChild(link);
        // вставка photo в пост
        post.appendChild(photo);
        //добавление в пост about
        post.appendChild(about);
    }
    return Post;
}());

const MiniPost = (function() {
    function MiniPost(minipost, initial, config) {
        this.minipost = minipost;
        // получения данных для поста
        const info = config[initial];
        // создание div для фото поста
        const mphoto = document.createElement('div');
        // добавление класса photo
        mphoto.classList.add('m_photo');
        // созданре блока фона
        const style = document.createElement('style');
        // вставка фото-фона поста
        let j = '#minipost' + (initial + 1) ;
        style.innerHTML =  j +' .m_photo { background-image: url(' + info.photo  + ');}';
        mphoto.appendChild(style);
        // создание элемента для фото автора
        const muser_pic = document.createElement('img');
        // добавление класса фото автора 
        muser_pic.classList.add('m_user_pic');
        // передача картинки в элемент
        muser_pic.src = info.user_pic;
        // передача размеров картинки
        muser_pic.width = 35;
        muser_pic.height = 35;
        // добавляем фото автора внутрь блока поста 
        mphoto.appendChild(muser_pic);
        // создание элемента для имени автора поста
        const muser_name = document.createElement('h1');
        // добавление класса авторапоста 
        muser_name.classList.add('m_user_name');
        // Вставка имени автора поста и даты
        muser_name.innerHTML = info.user_name + '<br><a>' + info.post_date + '</a>';
        // добавление элемента в тело поста
        mphoto.appendChild(muser_name);
        // создание элемента заголовка поста
        
        const mabout = document.createElement('div');
        // добавление класса содержимого поста
        mabout.classList.add('m_about');
        // создание элемента для текста поста
        const mtitle = document.createElement('h1');
        // добавление класса текста поста
        mtitle.classList.add('m_title');
        // передача содержимого поста
        mtitle.textContent = info.title;
        // добавление текста в тело поста
        mabout.appendChild(mtitle);
        // создание элемента для ссылки 
        
        // вставка photo в пост
        minipost.appendChild(mphoto);
        //добавление в пост about
        minipost.appendChild(mabout);
    }
    return MiniPost;
}());



const cnfg1 = [
    {
        title: 'The 10 most beautiful places you should visit in your life',
        article: 'Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra bibendum. Vivamus id urna et leo blandit consequat.',
        photo: 'images/post1.png',
        user_name: 'Luke Cage',
        user_pic: 'images/profile_pic1.png',
        post_date: 'October 11, 2016',
        link: 'Continue Reading',
    } ,
    {
        title: 'Perfect gear to take with you if you go on a photography trip',
        article: 'Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra bibendum. Vivamus id urna et leo blandit consequat.',
        photo: 'images/post2.png',
        user_name: 'Jessica Simpson',
        user_pic: 'images/profile_pic2.png',
        post_date: 'June 12, 2016',
        link: 'Continue Reading',
    } ,
    {
        title: 'We are looking for another photographer to join our group',
        article: 'Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum. Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec metus pharetra bibendum. Vivamus id urna et leo blandit consequat.',
        photo: 'images/post3.png',
        user_name: 'Luke Cage',
        user_pic: 'images/profile_pic1.png',
        post_date: 'June 12, 2016',
        link: 'Continue Reading',
    } ,
]
const cnfg2 = [
    {
        title: 'The 10 most beautiful places you should visit in your life',
        photo: 'images/minipost1.png',
        user_name: 'Luke Cage',
        user_pic: 'images/profile_pic1.png',
        post_date: 'October 11, 2016',
    } ,
    {
        title: 'We found the most beautiful place for our party november',
        photo: 'images/minipost2.png',
        user_name: 'Jessica Simpson',
        user_pic: 'images/profile_pic2.png',
        post_date: 'June 12, 2016',
    } ,
    {
        title: 'Why New York is still our favorite city to visit',
        photo: 'images/minipost3.png',
        user_name: 'Luke Cage',
        user_pic: 'images/profile_pic1.png',
        post_date: 'June 12, 2016',
    } ,
]

const post1 = new Post(document.getElementById('post1'), 0, cnfg1);
const post2 = new Post(document.getElementById('post2'), 1, cnfg1);
const post3 = new Post(document.getElementById('post3'), 2, cnfg1);
const minipost1 = new MiniPost(document.getElementById('minipost1'), 0, cnfg2);
const minipost2 = new MiniPost(document.getElementById('minipost2'), 1, cnfg2);
const minipost3 = new MiniPost(document.getElementById('minipost3'), 2, cnfg2);