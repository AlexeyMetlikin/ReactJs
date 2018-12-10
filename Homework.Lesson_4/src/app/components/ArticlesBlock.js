import React from 'react'
import Article from './Article'
import TextInput  from './TextInput'
import TextArea  from './TextArea'
import Button from './Button'

export default class ArticlesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {title: "componentDidMount", text: "componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount(). You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the constructor() instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position."},
  			{title: "Post Title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"},
  			{title: "Post Title", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"},
  			{title: "Post Title", text: "componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount(). You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues. In most cases, you should be able to assign the initial state in the constructor() instead. It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position."},
      ]
    };

    this.addArticle = this.addArticle.bind(this);
  }

	render() {
    console.log('ArticlesBlock.render');
    let articles = this.getArticles();
		return (
      <div>
        <div className="articles">
          {articles}
        </div>
        <TextInput className="input-title" ref="title" placeholder="Заголовок статьи"/>
        <TextArea className="input-text" ref="text" cols="40" rows="10" placeholder="Текст статьи" />
        <Button action={this.addArticle} text="Добавить статью" />
      </div>
    );
	}

  getArticles() {
    let articles = this.state.articles.map((article, index) => {
      return <Article key={index} title={article.title} text={article.text} />
    });
    return articles;
  }

  addArticle() {
    let title = this.refs.title.getValue();
    let text = this.refs.text.getValue();

    if(typeof title !== "string" || title.length < 5 ||
       typeof text !== "string" || text.length < 10) {
         console.log('Ошибка создания статьи');
         return false;
    }

    var newArticle = {title: title, text: text};
    var articles = [...this.state.articles, newArticle];
    this.setState({articles: articles});
  }
}
