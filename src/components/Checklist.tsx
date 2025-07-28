import { Checklist as ChecklistType } from '@/types/product';
import { Card,CardContent,CardHeader,CardTitle } from './ui/Card';

interface ChecklistProps {
  checklist: ChecklistType[];
}

export function Checklist({ checklist }: ChecklistProps) {
  if (checklist.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Course Checklist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything included in your IELTS preparation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklist.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item.title}
                </CardTitle>
              </CardHeader>
              {item.description && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}