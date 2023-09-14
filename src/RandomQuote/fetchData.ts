
type Data = {
  id:number;
  name:string;
}
export async function fetchData():Promise<Data[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();
    
    return jsonData;

  }catch (error) {
    console.error(error);
    throw error; // エラーを再スローして呼び出し元に伝える
  }
}