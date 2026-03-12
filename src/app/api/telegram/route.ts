import { NextRequest, NextResponse } from 'next/server';

/**
 * POST-запрос с формы сайта
 * body = { name: string, phone: string, comment?: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, comment } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }

    // Отправляем данные в Telegram через нашего бота

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Ошибка в API /telegram:', err);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}