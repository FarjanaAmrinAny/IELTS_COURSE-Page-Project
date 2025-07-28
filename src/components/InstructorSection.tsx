import { Section } from '@/types/product';
import { Card, CardContent } from '@/components/ui/Card';

interface InstructorSectionProps {
  sections: Section[];
}

export function InstructorSection({ sections }: InstructorSectionProps) {
  const instructorSections = sections.filter(section => section.type === 'instructor');
  
  if (instructorSections.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Instructors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced IELTS experts who will guide you to success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructorSections.map((section) => (
            <Card key={section.id} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                {section.content.instructor_image && (
                  <div className="mb-6">
                    <img
                      src={section.content.instructor_image}
                      alt={section.content.instructor_name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {section.content.instructor_name || section.title}
                </h3>
                {section.content.instructor_title && (
                  <p className="text-blue-600 font-medium mb-4">
                    {section.content.instructor_title}
                  </p>
                )}
                {section.content.instructor_bio && (
                  <p className="text-gray-600 leading-relaxed">
                    {section.content.instructor_bio}
                  </p>
                )}
                {section.content.description && (
                  <div 
                    className="text-gray-600 leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.content.description }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}