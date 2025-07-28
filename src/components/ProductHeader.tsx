import { ProductData } from '@/types/product';
import { Button } from '@/components/ui/Button';

interface ProductHeaderProps {
  product: ProductData;
}

export function ProductHeader({ product }: ProductHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {product.title}
            </h1>
            <div 
              className="text-lg text-gray-700 mb-8 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4">
                {product.cta_text.primary}
              </Button>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">৳1,000</span>
                <span className="text-lg text-gray-500 ml-2">only</span>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Highlights</h3>
              <div className="space-y-4">
                {product.checklist.slice(0, 4).map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">{item.title}</p>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}