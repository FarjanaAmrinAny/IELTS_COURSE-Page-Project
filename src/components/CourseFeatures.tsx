import { Section } from '@/types/product';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface CourseFeaturesProps {
  sections: Section[];
}

export function CourseFeatures({ sections }: CourseFeaturesProps) {
  const featureSections = sections.filter(section => section.type === 'features');
  
  if (featureSections.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Course Layout & Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive course is structured to maximize your learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureSections.map((section) => (
            <Card key={section.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {section.content.description && (
                  <div 
                    className="text-gray-600 leading-relaxed prose prose-sm max-w-none mb-4"
                    dangerouslySetInnerHTML={{ __html: section.content.description }}
                  />
                )}
                {section.content.points && section.content.points.length > 0 && (
                  <ul className="space-y-2">
                    {section.content.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}