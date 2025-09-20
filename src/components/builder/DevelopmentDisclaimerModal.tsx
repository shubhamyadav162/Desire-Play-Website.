import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Zap, Clock, CheckCircle, ArrowRight } from "lucide-react";

interface DevelopmentDisclaimerModalProps {
  isOpen: boolean;
  onContinue: () => void;
  onCancel: () => void;
}

const DevelopmentDisclaimerModal = ({ isOpen, onContinue, onCancel }: DevelopmentDisclaimerModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-md border-2 border-blue-200 bg-gradient-to-b from-blue-50 to-white">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            Under Development
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            We're currently integrating our advanced logo builder system
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 px-2">
          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Beta Version - Coming Soon
            </Badge>
          </div>

          {/* Progress Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-600" />
              What's Coming:
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Advanced AI-powered logo generation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Real-time preview and customization</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Professional file export (SVG, PNG, PDF)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Brand guidelines and business card integration</span>
              </div>
            </div>
          </div>

          {/* Current Beta Features */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Currently Available:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Basic logo preview and customization</li>
              <li>• Color and font selection</li>
              <li>• Template browsing</li>
              <li>• Mockup previews</li>
            </ul>
          </div>

          <div className="text-center text-xs text-gray-500 italic">
            Full integration expected in 2-3 weeks. You can test current features or wait for the complete version.
          </div>
        </div>

        <DialogFooter className="flex gap-3 sm:gap-0">
          <Button
            variant="outline"
            onClick={onCancel}
            className="flex-1"
          >
            Maybe Later
          </Button>
          <Button
            onClick={onContinue}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Test Beta Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DevelopmentDisclaimerModal;