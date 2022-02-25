import type { TurboModule } from 'react-native-tscodegen-types'
import { TurboModuleRegistry } from 'react-native-tscodegen-types'

// General interface for the package. Our generated cpp wrapper will be based on this
export interface BbsNativeBindings extends TurboModule {
  bbs_string_free(options: {}): void
  bbs_byte_buffer_free(options: {}): void
  free_bbs_blind_commitment(options: {}): void
  bbs_blind_signature_size(): number
  bbs_blind_commitment_context_init(options: {}): number
  bbs_blind_commitment_context_add_message_string(options: {}): number
  bbs_blind_commitment_context_add_message_bytes(options: {}): number
  bbs_blind_commitment_context_add_message_prehashed(options: {}): number
  bbs_blind_commitment_context_set_public_key(options: {}): number
  bbs_blind_commitment_context_set_nonce_string(options: {}): number
  bbs_blind_commitment_context_set_nonce_bytes(options: {}): number
  bbs_blind_commitment_context_set_nonce_prehashed(options: {}): number
  bbs_blind_commitment_context_finish(options: {}): number
  free_bbs_blind_sign(options: {}): void
  bbs_blinding_factor_size(options: {}): number
  bbs_blind_sign_context_init(options: {}): number
  bbs_blind_sign_context_add_message_string(options: {}): number
  bbs_blind_sign_context_add_message_bytes(options: {}): number
  bbs_blind_sign_context_add_message_prehashed(options: {}): number
  bbs_blind_sign_context_set_public_key(options: {}): number
  bbs_blind_sign_context_set_secret_key(options: {}): number
  bbs_blind_sign_context_set_commitment(options: {}): number
  bbs_blind_sign_context_finish(options: {}): number
  bbs_unblind_signature(options: {}): number
  free_create_proof(options: {}): void
  bbs_create_proof_context_size(options: {}): number
  bbs_create_proof_context_init(options: {}): number
  bbs_create_proof_context_add_proof_message_string(options: {}): number
  bbs_create_proof_context_add_proof_message_bytes(options: {}): number
  bbs_create_proof_context_add_proof_message_prehashed(options: {}): number
  bbs_create_proof_context_set_signature(options: {}): number
  bbs_create_proof_context_set_public_key(options: {}): number
  bbs_create_proof_context_set_nonce_string(options: {}): number
  bbs_create_proof_context_set_nonce_bytes(options: {}): number
  bbs_create_proof_context_set_nonce_prehashed(options: {}): number
  bbs_create_proof_context_finish(options: {}): number
  free_bbs_sign(options: {}): void
  bbs_signature_size(options: {}): number
  bbs_sign_context_init(): number
  bbs_sign_context_add_message_string(options: {}): number
  bbs_sign_context_add_message_bytes(options: {}): number
  bbs_sign_context_add_message_prehashed(options: {}): number
  bbs_sign_context_set_secret_key(options: {}): number
  bbs_sign_context_set_public_key(options: {}): number
  bbs_sign_context_finish(options: {}): {}
  bbs_verify_context_init(options: {}): number
  bbs_verify_context_add_message_string(options: {}): number
  bbs_verify_context_add_message_bytes(options: {}): number
  bbs_verify_context_add_message_prehashed(options: {}): number
  bbs_verify_context_set_public_key(options: {}): number
  bbs_verify_context_set_signature(options: {}): number
  bbs_verify_context_finish(options: {}): number
  free_verify_proof(options: {}): void
  bbs_get_total_messages_count_for_proof(options: {}): number
  bbs_verify_proof_context_init(options: {}): number
  bbs_verify_proof_context_add_message_string(options: {}): number
  bbs_verify_proof_context_add_message_bytes(options: {}): number
  bbs_verify_proof_context_add_message_prehashed(options: {}): number
  bbs_verify_proof_context_set_proof(options: {}): number
  bbs_verify_proof_context_set_public_key(options: {}): number
  bbs_verify_proof_context_set_nonce_string(options: {}): number
  bbs_verify_proof_context_set_nonce_bytes(options: {}): number
  bbs_verify_proof_context_set_nonce_prehashed(options: {}): number
  bbs_verify_proof_context_finish(options: {}): number
  free_verify_sign_proof(options: {}): void
  bbs_verify_blind_commitment_context_init(options: {}): number
  bbs_verify_blind_commitment_context_add_blinded(options: {}): number
  bbs_verify_blind_commitment_context_set_public_key(options: {}): number
  bbs_verify_blind_commitment_context_set_nonce_string(options: {}): number
  bbs_verify_blind_commitment_context_set_nonce_bytes(options: {}): number
  bbs_verify_blind_commitment_context_set_nonce_prehashed(options: {}): number
  bbs_verify_blind_commitment_context_set_proof(options: {}): number
  bbs_verify_blind_commitment_context_finish(options: {}): number
  bls_secret_key_size(options: {}): number
  bls_public_key_g2_size(options: {}): number
  blinding_factor_size(options: {}): number
  bls_public_key_g1_size(options: {}): number
  bls_generate_g2_key(options: {}): {}
  bls_generate_g1_key(options: {}): {}
  bls_generate_blinded_g2_key(options: {}): {}
  bls_generate_blinded_g1_key(options: {}): {}
  bls_get_public_key(options: {}): number
  bls_secret_key_to_bbs_key(options: {}): number
  bls_public_key_to_bbs_key(options: {}): {}
}

// We MUST export this according to tscodegen. We are ignoring it however.
export default TurboModuleRegistry.getEnforcing<BbsNativeBindings>('BbsSignatures')
