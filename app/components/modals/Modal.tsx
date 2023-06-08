'use client';

import { useState, useEffect, useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
  title?: string;
  isOpen?: boolean;
  disabled?: boolean;
  actionLabel: string;
  onClose: () => void;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  body,
  title,
  footer,
  isOpen,
  onClose,
  disabled,
  onSubmit,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          flex
          z-50
          fixed
          inset-0
          items-center
          outline-none
          justify-center
          overfolow-y-auto
          overfow-x-hidden
          bg-neutral-800/70
          focus:outline-none
        "
      >
        <div
          className="
            my-6
            w-full
            h-full
            mx-auto
            relative
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            lg:h-auto
            md:h-auto
          "
        >
          {/* CONTENT */}
          <div
            className={`
              h-full
              translate
              duration-300
              ${showModal ? 'opacity-100' : 'opacity-0'}
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
            `}
          >
            <div
              className="
                flex
                h-full
                w-full
                flex-col
                bg-white
                relative
                translate
                lg:h-auto
                md:h-auto
                shadow-lg
                rounded-lg
                outline-none
                focus:outline-none
              "
            >
              {/* HEADER */}
              <div
                className="
                  flex
                  items-center
                  p-6
                  rounded-t
                  justify-center
                  relative
                  border-b-[1px]
              "
              >
                <button
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    right-9
                  "
                  onClick={onClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  {title}
                </div>
              </div>
              {/* BODY */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
