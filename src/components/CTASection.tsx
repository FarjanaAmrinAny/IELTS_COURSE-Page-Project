import { CtaText } from '@/types/product';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  ctaText: CtaText;
}

export function CTASection({ ctaText }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your IELTS Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful students who have achieved their target IELTS scores with our comprehensive course.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            >
              {ctaText.primary}
            </Button>
            {ctaText.secondary && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                {ctaText.secondary}
              </Button>
            )}
          </div>
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium">৳1,000 - Limited Time Offer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}