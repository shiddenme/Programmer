/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class com_example_javacallsc_JNI */

#ifndef _Included_com_example_javacallsc_JNI
#define _Included_com_example_javacallsc_JNI
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     com_example_javacallsc_JNI
 * Method:    add
 * Signature: (II)I
 */
JNIEXPORT jint JNICALL Java_com_example_javacallsc_JNI_add
  (JNIEnv *, jobject, jint, jint);

/*
 * Class:     com_example_javacallsc_JNI
 * Method:    sayHello
 * Signature: (Ljava/lang/String;)Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_com_example_javacallsc_JNI_sayHello
  (JNIEnv *, jobject, jstring);

/*
 * Class:     com_example_javacallsc_JNI
 * Method:    increaseArrayEles
 * Signature: ([I)[I
 */
JNIEXPORT jintArray JNICALL Java_com_example_javacallsc_JNI_increaseArrayEles
  (JNIEnv *, jobject, jintArray);

/*
 * Class:     com_example_javacallsc_JNI
 * Method:    checkPwd
 * Signature: (Ljava/lang/String;)I
 */
JNIEXPORT jint JNICALL Java_com_example_javacallsc_JNI_checkPwd
  (JNIEnv *, jobject, jstring);

#ifdef __cplusplus
}
#endif
#endif