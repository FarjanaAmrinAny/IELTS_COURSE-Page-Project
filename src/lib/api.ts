import { ApiResponse } from '@/types/product';

export async function fetchProductData(lang: 'en' | 'bn' = 'en'): Promise<ApiResponse> {
  const response = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        'accept': 'application/json',
      },
      next: {
        revalidate: 3600, // ISR: revalidate every hour
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }

  return response.json();
}

export function extractYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}