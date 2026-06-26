
import { NextResponse } from 'next/server';


/*GET*/
export async function GET() {
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30', {

      headers: { 'Content-Type': 'application/json' },

    });

    if (!res.ok) throw new Error('Gagal mengambil data dari server pusat');
    
    const data = await res.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/*POST*/
export async function POST(request) {
  try {
    const bodyData = await request.json();

    const res = await fetch('https://api.escuelajs.co/api/v1/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData), 
    });

    if (!res.ok) throw new Error('Gagal menambahkan produk ke server pusat');

    const data = await res.json();
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}