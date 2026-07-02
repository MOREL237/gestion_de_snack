import { View, Text, Pressable, Modal as RNModal } from "react-native";
import { X } from "lucide-react-native";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export function Modal({ visible, onClose, title, children }: ModalProps) {
  return (
    <RNModal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/40">
        <Pressable className="flex-1" onPress={onClose} />

        <View className="bg-surface-lowest rounded-t-2xl p-md gap-md shadow-modal max-h-[85%]">
          <View className="flex-row items-center justify-between">
            {title && (
              <Text className="text-title-md font-title text-on-surface">
                {title}
              </Text>
            )}
            <Pressable onPress={onClose} hitSlop={8} className="ml-auto">
              <X size={20} color="#464555" />
            </Pressable>
          </View>

          {children}
        </View>
      </View>
    </RNModal>
  );
}