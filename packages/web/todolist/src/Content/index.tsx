import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer'

const data = {
  items: [
    {
      content: 'Hello World',
      status: false,
    },
    {
      content: 'Gemo',
      status: false,
    }
  ]
};

export function Content() {
  return (
    <section className="todoapp">
      <div>
        <Header />
        <TodoList items={data.items} />
        <Footer itemNumber={data.items.length} />
      </div>
    </section>
      
  );
}